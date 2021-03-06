import { ClientReadableStream } from 'grpc-web'
import { AdminClient } from '../proto/AdminServiceClientPb'
import { ReadRequest } from '../proto/admin_pb'
import { CompetitionClient } from '../proto/CompetitionServiceClientPb'
import { ProblemStream } from '../proto/shared_pb'
import { adminService, competitionService } from '../services'
import { createProblem, deleteProblem, swapProblems, updateProblem } from '../state/problems'
import { createStreamService } from '../utils/streamService'

const handleInitialProblem = (p: ProblemStream.Initial): void => {
  const problem = p.getProblem()!
  updateProblem({
    id: problem.getId(),
    position: p.getAt(),
    body: problem.getBody(),
    image: problem.getImage(),
    solution: problem.getSolution().toString(),
  })
}

const handleUpdateProblem = (p: ProblemStream.Update): void => {
  const problem = p.getProblem()!
  updateProblem({
    id: problem.getId(),
    body: problem.getBody(),
    image: problem.getImage(),
    solution: problem.getSolution().toString(),
  })
}

const handleDeleteProblem = (p: ProblemStream.Delete): void => {
  deleteProblem(p.getId())
}

const handleSwapProblem = (p: ProblemStream.Swap): void => {
  swapProblems(p.getA(), p.getB())
}

const handleCreateProblem = (p: ProblemStream.Create): void => {
  createProblem(p.getAt(), p.getProblem()!.getId())
}

export const createProblemsStream = <T extends AdminClient | CompetitionClient>(
  client: T
): (() => Promise<ClientReadableStream<ProblemStream>>) => {
  return async () => {
    const stream = await (client.getProblems(new ReadRequest()) as any as Promise<
      ClientReadableStream<ProblemStream>
    >)

    stream.on('data', (problem: ProblemStream) => {
      const type = problem.getType()
      switch (type) {
        case ProblemStream.Type.K_INITIAL: {
          handleInitialProblem(problem.getInitial()!)
          break
        }
        case ProblemStream.Type.K_UPDATE: {
          handleUpdateProblem(problem.getUpdate()!)
          break
        }
        case ProblemStream.Type.K_DELETE: {
          handleDeleteProblem(problem.getDelete()!)
          break
        }
        case ProblemStream.Type.K_SWAP: {
          handleSwapProblem(problem.getSwap()!)
          break
        }
        case ProblemStream.Type.K_CREATE: {
          handleCreateProblem(problem.getCreate()!)
          break
        }
        default: {
          console.error(`unknown ProblemStream type: ${type}`)
          break
        }
      }
    })

    return stream
  }
}

const adminProblemService = createStreamService(createProblemsStream(adminService))
const competitionProblemService = createStreamService(createProblemsStream(competitionService))

export const getProblemsService = <T extends AdminClient | CompetitionClient>(client: T) => {
  if (client === adminService) {
    return adminProblemService
  }
  return competitionProblemService
}
