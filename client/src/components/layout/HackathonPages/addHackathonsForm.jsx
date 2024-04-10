import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddHackathonSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  status: Yup.string().required('Required'),
  tagline: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  prizes: Yup.array().of(
    Yup.object().shape({
      rank: Yup.string().required('Required'),
      prize: Yup.string().required('Required'),
    })
  ),
  registrationStart: Yup.date().required('Required'),
  registrationEnd: Yup.date().required('Required'),
  hackathonStart: Yup.date().required('Required'),
  hackathonEnd: Yup.date().required('Required'),
  teamSizeMin: Yup.number().required('Required'),
  teamSizeMax: Yup.number().required('Required'),
  mode: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
});

function AddHackathonForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        status: '',
        tagline: '',
        description: '',
        prizes: [],
        registrationStart: '',
        registrationEnd: '',
        hackathonStart: '',
        hackathonEnd: '',
        teamSizeMin: '',
        teamSizeMax: '',
        mode: '',
        location: '',
      }}
      validationSchema={AddHackathonSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <Field type="text" name="name" placeholder="Hackathon Name" />
          <ErrorMessage name="name" component="div" />

          <Field as="select" name="status">
            <option value="">Select Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="open">Open</option>
          </Field>
          <ErrorMessage name="status" component="div" />

          {/* Add other fields similarly... */}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default AddHackathonForm;
