import React from 'react'
import Card from '../components/card'
import Input from '../components/input'
import Button from '../components/button'
import styles from '../styles/register.module.scss'
import { Formik, Form, Field, FieldProps, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Az email formátuma nem megfelelő')
    .required('Email kötelező'),
  password: Yup.string()
    .required('Jelszó kötelező'),
  passwordRe: Yup.string()
    .oneOf([Yup.ref('password')], 'Két jelszó nem egyezik')
    .required('Jelszó ismétlés kötelező'),
  name: Yup.string()
    .required('Név kötelező'),
  school: Yup.string()
    .required('Iskola kötelező'),
  class: Yup.number()
    .min(9, 'Az évfolyamnak 9 és 12 között kell lennie')
    .max(12, 'Az évfolyamnak 9 és 12 között kell lennie')
    .required('Évfolyam kötelező'),
})

const initialValues = {
  email: '',
  password: '',
  passwordRe: '',
  name: '',
  school: '',
  class: '',
}

const RegisterPage: React.VFC = () => {

  const onSubmit = (asd: any) => {
    console.log('submit', asd)
  }

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({ isSubmitting }) => (
            <Form>
              <h1>Regisztráció</h1>
              <div className={styles.field}>
                <span>Email</span>
                <Field name="email">
                  {({ field, meta }: FieldProps) => (
                    <Input type="name" block {...field} error={!!meta.touched && !!meta.error} />
                  )}
                </Field>
                <ErrorMessage name="email">
                  {(msg) => (<span className={styles.error}>{msg}</span>)}
                </ErrorMessage>
              </div>
              <div className={styles.field}>
                <span>Jelszó</span>
                <Field name="password">
                  {({ field, meta }: FieldProps) => (
                    <Input block type="password" {...field} error={!!meta.touched && !!meta.error} />
                  )}
                </Field>
                <ErrorMessage name="password">
                  {(msg) => (<span className={styles.error}>{msg}</span>)}
                </ErrorMessage>
              </div>
              <div className={styles.field}>
                <span>Jelszó ismétlés</span>
                <Field name="passwordRe">
                  {({ field, meta }: FieldProps) => (
                    <Input block type="password" {...field} error={!!meta.touched && !!meta.error} />
                  )}
                </Field>
                <ErrorMessage name="passwordRe">
                  {(msg) => (<span className={styles.error}>{msg}</span>)}
                </ErrorMessage>
              </div>
              <div className={styles.field}>
                <span>Név</span>
                <Field name="name">
                  {({ field, meta }: FieldProps) => (
                    <Input block {...field} error={!!meta.touched && !!meta.error} />
                  )}
                </Field>
                <ErrorMessage name="name">
                  {(msg) => (<span className={styles.error}>{msg}</span>)}
                </ErrorMessage>
              </div>
              <div className={styles.field}>
                <span>Iskola</span>
                <Field name="school">
                  {({ field, meta }: FieldProps) => (
                    <Input block {...field} error={!!meta.touched && !!meta.error} />
                  )}
                </Field>
                <ErrorMessage name="school">
                  {(msg) => (<span className={styles.error}>{msg}</span>)}
                </ErrorMessage>
              </div>
              <div className={styles.field}>
                <span>Évfolyam</span>
                <Field name="class">
                  {({ field, meta }: FieldProps) => (
                    <Input type="number" block {...field} error={!!meta.touched && !!meta.error} />
                  )}
                </Field>
                <ErrorMessage name="class">
                  {(msg) => (<span className={styles.error}>{msg}</span>)}
                </ErrorMessage>
              </div>
              <div className={styles.controls}>
                <Button className={styles.button} primary disabled={isSubmitting} type="submit">Regisztráció</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  )
}

export default RegisterPage