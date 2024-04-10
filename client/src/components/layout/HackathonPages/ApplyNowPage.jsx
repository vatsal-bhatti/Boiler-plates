import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { useDispatch, useSelector } from "react-redux";
// import { addHackathon } from "../../redux/actions/HackathonActions";
import { useNavigate } from "react-router-dom";
import MultiSelectDropdown from "./MultiSelectDropDown";
import { ApplyNowSchema } from "../../common/Schemas/Schemas";
import {
  generalThunkFunction,
  workSuccess,
} from "../../../redux/actions/Genralactions";

function ApplyNow({}) {
  const generalState = useSelector((state) => state.generalReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [teamSize, setTeamSize] = useState(1);

  const [hackathonsApplications, setHackathonsApplications] = useState([]);
const HackthonId = 1;
  const minTeam = 1;
  const maxTeam = 5;
  let teamMembers;
  const LeaderId =1;
  if (minTeam === 1) {
    teamMembers = Array.from(
      { length: maxTeam - minTeam + 1 },
      (_, i) => minTeam + 1 + i
    );
  } else {
    teamMembers = Array.from(
      { length: maxTeam - minTeam + 1 },
      (_, i) => minTeam + i
    );
  }

  console.log(teamMembers);
  useEffect(() => {
    dispatch(generalThunkFunction("getAllHackathonsApplications"));
  }, []);

  useEffect(() => {
    setHackathonsApplications(generalState.hackathonApplications);
  }, [generalState]);

  const initialValues = {
    name: "",
    email: "",
    gender: "",
    teamMembers: "number",
    teamDetails: [],
    problemStatementAbstract: "",
    technologyUsed: [],
  };

  return (
    <div className="w-full  min-h-screen bg-white flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-lg shadow-md shadow-blue-500  w-fit overflow-hidden max-w-[1000px]">
        <div className="md:flex w-full ">
          <div className="w-full md:w-fit mx-auto py-10 px-5 md:px-10 ">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">
                Add New Hackathon
              </h1>
              <p>Enter the details of the new hackathon</p>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={ApplyNowSchema}
              onSubmit={(values, action) => {
                console.log("submit worked")
                //  const teamDetails= values.teamDetails.slice(0, values.teamMembers - 1);
              if(hackathonsApplications.length>0)  {
                const applicationId = parseInt(hackathonsApplications[hackathonsApplications.length -1].id ) + 1;
                console.log(values.teamDetails);
                const ApplicationDetails = {
                  id:applicationId,
                  hackathonId:HackthonId,
                  hackathonName:"Innovate-a-thon",
                  leaderId:LeaderId,
                  name: values.name,
                  email: values.email,
                  gender: values.gender,
                  teamMembers: "number",
                  teamDetails: values.teamDetails,
                  problemStatementAbstract: values.problemStatementAbstract,
                  technologyUsed: selectedTechnologies,
                };




               
          dispatch(generalThunkFunction("addHackathonApplication",ApplicationDetails))









                console.log(ApplicationDetails);




                
                // action.resetForm();
              }}}

              // dispatch(addHackathon(values));
            >
              {(formik) => (
                <div className="">
                  <Form>
                    {/*hackathon Name input */}

                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <label
                          htmlFor="name"
                          className="text-xs font-semibold px-1"
                        >
                          Leader Name
                        </label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          className="w-full  text-center py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                          placeholder="ETH India"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-xs text-red-500"
                        />
                      </div>
                    </div>

                    {/* Tagline input */}
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <label
                          htmlFor="tagline"
                          className="text-xs font-semibold px-1"
                        >
                          Email
                        </label>
                        <Field
                          type="text"
                          id="email"
                          name="email"
                          className="w-full  text-center py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                          placeholder="Biggest Ethereum Hackathon "
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-xs text-red-500"
                        />
                      </div>
                    </div>
                    {/* Description input */}
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <label
                          htmlFor="description"
                          className="text-xs font-semibold px-1"
                        >
                          Gender
                        </label>
                        <Field
                          as="select"
                          id="gender"
                          name="gender"
                          className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        >
                          <option value="" disabled defaultValue>
                            Select Gender
                          </option>

                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Field>
                        <ErrorMessage
                          name="gender"
                          component="div"
                          className="text-xs text-red-500"
                        />
                      </div>
                    </div>

                    {/* max min team sixe hackathon mode venu */}

                    {/* Min team size input */}
                    <div className="flex -mx-3 ">
                      <div className="w-full px-3 mb-5">
                        <label
                          htmlFor="teamMin"
                          className="text-xs font-semibold px-1"
                        >
                          Team Members
                        </label>
                        <div className="grid grid-cols-5 gap-1">
                          {teamMembers.map((member) => (
                            <div className="flex ">
                              <label
                                htmlFor="teamMin"
                                className="text-xs font-semibold px-1"
                              >
                                {member}
                              </label>
                              <Field
                                type="radio"
                                id={`teamMin-${member}`}
                                name="teamMin"
                                value={member}
                                onChange={(e) =>
                                  setTeamSize(parseInt(e.target.value))
                                }
                                checked={teamSize === member}
                                className="w-full  text-center  py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                                placeholder="number"
                              />
                            </div>
                          ))}
                        </div>

                        {/* <ErrorMessage
                          name="teamMin"
                          component="div"
                          className="text-xs text-red-500"
                        /> */}
                      </div>
                    </div>
                    <FieldArray name="teamDetails">
                      {({ insert, remove, push }) => (
                        <div>
                          {Array.from({ length: teamSize - 1 }).map((_, i) => (
                            <div className="flex" key={i}>
                              <div className="w-full px-3 mb-5">
                                <label
                                  htmlFor={`teamDetails.${i}.name`}
                                  className="text-xs font-semibold px-1"
                                >
                                  Name {i + 1}
                                </label>
                                <Field
                                  name={`teamDetails.${i}.name`}
                                  placeholder="Name"
                                  type="text"
                                />
                                <ErrorMessage
                                  name={`teamDetails.${i}.name`}
                                  component="div"
                                  className="text-xs text-red-500"
                                />
                              </div>
                              <div className="w-full px-3 mb-5">
                                <label
                                  htmlFor={`teamDetails.${i}.email`}
                                  className="text-xs font-semibold px-1"
                                >
                                  Email {i + 1}
                                </label>
                                <Field
                                  name={`teamDetails.${i}.email`}
                                  placeholder="Email"
                                  type="text"
                                />
                                <ErrorMessage
                                  name={`teamDetails.${i}.email`}
                                  component="div"
                                  className="text-xs text-red-500"
                                />
                              </div>
                              <div className="w-full px-3 mb-5 ">
                                <label
                                  htmlFor={`teamDetails.${i}.gender`}
                                  className="text-xs font-semibold px-1"
                                >
                                  Gender {i + 1}
                                </label>
                                <Field
                                  as="select"
                                  name={`teamDetails.${i}.gender`}
                                  className="w-full py-[2px]"
                                >
                                  <option value="" disabled defaultValue>
                                    Select Gender
                                  </option>
                                  <option value="  Select Gender">  Select Gender</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Other">Other</option>
                                </Field>
                                <ErrorMessage
                                  name={`teamDetails.${i}.gender`}
                                  component="div"
                                  className="text-xs text-red-500"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </FieldArray>

                    {/*  Max team size input */}
                    <div className="flex -mx-3 ">
                      <div className="w-full px-3 mb-5">
                        <label
                          htmlFor="teamMax"
                          className="text-xs font-semibold px-1"
                        >
                          Problem Statement Abstract
                        </label>
                        <Field
                          type="text"
                          id="problemStatementAbstract"
                          name="problemStatementAbstract"
                          className="w-full  text-center  py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                          placeholder="number"
                        />
                        <ErrorMessage
                          name="problemStatementAbstract"
                          component="div"
                          className="text-xs text-red-500"
                        />
                      </div>
                    </div>

                    {/*dates section */}

                    <div className="flex -mx-3 ">
                      <div className="w-full px-3 mb-5">
                        <MultiSelectDropdown
                          labelDropdown="Select Technologies"
                          labelStack="Tech Stack"
                          ifFull={true}
                          options={[
                            "No Restrictions",
                            "BlockChain",
                            "ReactJs",
                            "NodeJS",
                            "AI/ML",
                            "Deep Learning",
                          ]}
                          selectedOptions={selectedTechnologies}
                          onSelect={(option) => {
                            setSelectedTechnologies((prevSelectedOptions) => {
                              if (prevSelectedOptions.includes(option)) {
                                return prevSelectedOptions.filter(
                                  (selectedOption) => selectedOption !== option
                                );
                              } else {
                                return [...prevSelectedOptions, option];
                              }
                            });
                          }}
                        />
                        <ErrorMessage
                          name="techStacks"
                          component="div"
                          className="text-xs text-red-500"
                        />
                      </div>
                    </div>

                    <div className="flex -mx-3">
                      <div className="w-full  px-3 mb-0">
                        <button
                          onClick={() => console.log("submit button clicked")}
                          type="submit"
                          className="block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
                        >
                          SUBMIT APPLICATION
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyNow;
