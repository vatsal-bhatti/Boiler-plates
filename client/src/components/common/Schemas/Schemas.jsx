import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  Name: Yup.string().min(2).max(25).required("Please enter your name"),
  Email: Yup.string().email().required("Please enter your email"),
  Password: Yup.string().min(6).required("Please enter your password"),
  ConfirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("Password"), null], "Password must match"),
  Role: Yup.string()
    .oneOf([ "Host", "Participant"], "Invalid role selected")
    .required("Please select a role"),
});

export const LoginSchema = Yup.object({
  Email: Yup.string().email().required("Please enter your email"),
  Password: Yup.string().min(6).required("Please enter your password"),
  Role: Yup.string()
    .oneOf(["Admin", "Host", "Participant"], "Invalid role selected")
    .required("Please select a role"),
});



export const AddHackathonFormSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter the hackathon name"),
  tagline: Yup.string().min(10).max(100).required("Please enter hackathon tagline"),
  description: Yup.string().min(50).max(1000).required("Please enter hackathon description"),
  prizes: Yup.number().max(10000000).required("Please add prize pool"),
  // techstacks: Yup.string().oneOf(
  //   [
  //     "No Restrictions",
  //     "BlockChain",
  //     "ReactJs",
  //     "NodeJS",
  //     "AI/ML",
  //     "Deep Learning",
  //   ],
  //   "Invalid tech selected"
  // ).required("Please select a technology"),
  // perks: Yup.string().oneOf(
  //   [
  //     "No OtherPerks",
  //     "Accommodation",
  //     "Meals",
  //     "Swags",
  //     "Goodies",
  //     "Internship Opportunities",
  //     "Grants",
  //   ],
  //   "Invalid perk selected"
  // ).required("Please select any perk"),
  mode: Yup.string().oneOf(
    ["Online", "Offline"],
    "Invalid mode selected"
  ).required("Please select hackathon mode"),
  location: Yup.string(),

  registrationStart: Yup.date().min(
    Yup.ref("currentDate"),
    "Registration start date cannot be before the current date"
  ).notOneOf(
    [Yup.ref("hackathonStart")],
    "Registration start date cannot be the same as hackathon start date"
  ).required("Please enter registration start date"),
  
  registrationEnd: Yup.date().min(
    Yup.ref("registrationStart"),
    "Registration end date cannot be before registration start date"
  ).notOneOf(
    [Yup.ref("currentDate")],
    "Registration end date cannot be before the current date"
  ).required("Please enter registration end date"),
  hackathonStart: Yup.date().min(
    Yup.ref("registrationEnd"),
    "Hackathon start date cannot be before registration end date"
  ).notOneOf(
    [Yup.ref("registrationStart")],
    "Hackathon start date cannot be the same as registration start date"
  ).required("Please enter hackathon start date"),
  hackathonEnd: Yup.date().min(
    Yup.ref("hackathonStart"),
    "Hackathon end date cannot be before hackathon start date"
  ).required("Please enter hackathon end date"),
  // role: Yup.string(),
  teamMin: Yup.number().min(1).max(10).required("Please add team members"),
  teamMax: Yup.number().min(1).max(10).required("Please add team members"),
  currentDate: Yup.date().default(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }),
  
}).when([], (value, schema) => {
  return schema.test({
    test: () => {
      if (
        value.registrationStart <= value.registrationEnd &&
        value.registrationEnd <= value.hackathonStart &&
        value.hackathonStart <= value.hackathonEnd
      ) {
        return true;
      }
      return false;
    },
    message: "Invalid date range",
  });
});
