import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";

const Career = () => {
  const name = "Careers";
  const navigate = useNavigate();
  function load(link) {
    navigate(link);
    window.location.reload();
  }
  return (
    <>
      <Breadcrumb name1={name} name2={name} />
      <div className="career">
        <div className="career-div">
          <div className="crr-p">Medical Officer</div>
          <div className="mb-3">Posted on 5th January 2024</div>
          <div className="crr-p1">Job Description</div>
          <div className="cr-p2 mb-3">
            She /he is responsible for direct patient observation, order
            investigation, diagnosis and treatment. Ultimately, you’ll be
            responsible for making sure our hospital operations run smoothly.
          </div>
          <div className="crr-p1">Job Responsibilities</div>
          <div>
            - Adhere to the hospital duty time, uniform and dress code policy.
            ID card with stethoscope is compulsory.
          </div>
          <div>
            - Identify and prioritize patient’s need, emergency requirements and
            problems. Document patient’s history, provisional diagnosis and
            treatment clearly.
          </div>
          <div>
            - Ensure bedside handover and takeover of patients during shift
            change.
          </div>
          <div>
            - Order necessary investigations of the patient’s during diagnosis
            and treatment with approval of consultant and update in system.
          </div>

          <div>
            - Prioritize and ensure the decision of diagnosis, admission, refer
            or discharge is done within initial 2 hrs of patient entry in
            emergency department.
          </div>

          <div>
            - Maintain and follow infection control protocols in the working
            area.
          </div>

          <div>
            - Attend rounds with consultants mandatorily and carry out and
            document the instructions in detail.{" "}
          </div>

          <div>
            - Call for respective department consultation when required and
            ensure the emergency consultation is attended and reported in
            priority basis.
          </div>

          <div>
            - Provide patient status updates and necessary investigations to the
            concerned consultant.{" "}
          </div>

          <div>- Participate in in-service education and training. </div>

          <div>
            - Proper documentation of documents such as admissions/discharge.{" "}
          </div>

          <div>
            - Write clear and legible prescription which should include date,
            time of prescriptions along with documenting the changes made during
            rounds.
          </div>

          <div>
            - Daily update the progress note/continuation sheet as per the
            progress of treatment.{" "}
          </div>

          <div>- Document the incidents and report as per the protocol.</div>

          <div>
            - Medicines brand for prescription should be approved by Head of the
            department. Adhere to standard treatment guidelines.
          </div>

          <div>
            - Manage conflict, counsel and provide health education to patient
            and relatives.
          </div>

          <div>
            - Maintain professionalism in working hour and avoid self
            involvement in any political issues, groupism and gossiping inside
            hospital and among the hospital staff.
          </div>

          <div>
            - Carries out other duties assigned by immediate supervisor, line
            manager/hospital management and director.{" "}
          </div>

          <div className="mb-3">
            - Check if all necessary unsent forms (preoperative, High risk
            consents) has been signed as per requirement.
          </div>
          <br />
          <div className="crr-p1 mt-3">Skills</div>
          <ul>
            <li>Time Management.</li>
            <li>Proven experience as a paramedic.</li>
            <li>
              Knowledge of medical procedures, terminology and medications.
            </li>
            <li>
              Ability to stay calm and make the right decisions in adverse
              conditions.
            </li>
            <li>
              Excellent working knowledge of minor medical equipment and
              devices.
            </li>
          </ul>
          <br />
          <hr />
          <br />
          <br />
          <Link onClick={() => load("/apply")} className="cr-btn btn">
            Apply now
          </Link>
          <br />
          <br />
          <br />
          <br />
          <div className="crr-p">Register Nurse</div>
          <div>Posted on 5th January 2024</div>
          <br />
          <div className="crr-p1">Job Description</div>
          <div className="w-75">
            She is responsible for direct patient observation, order
            investigation, diagnosis and treatment. Ultimately, you’ll be
            responsible for making sure our hospital operations run smoothly.
          </div>
          <br />
          <div className="crr-p1">Job Responsibilities</div>

          <div>
            - Respect the hospital's dress code, uniform requirements, and duty
            schedule. Stethoscope on ID card required.
          </div>

          <div>
            - Determine and rank the patient's needs, emergency needs, and
            issues. Clearly record the patient's medical history, initial
            diagnosis, and course of treatment.{" "}
          </div>

          <div>
            - As shifts change, make sure patients are taken over and handed
            over at the bedside.{" "}
          </div>

          <div>
            - With the consultant's consent, order the patient's essential
            investigations during diagnosis and therapy, and update the system.
          </div>

          <div>
            - Maintain and follow infection control protocols in the working
            area.
          </div>

          <div>
            - Participate in rounds with consultants as required, follow the
            instructions precisely, and record them.{" "}
          </div>

          <div>
            - When necessary, request a meeting with the appropriate department,
            and make sure that any emergencies are attended to and reported on a
            priority basis.
          </div>

          <div>
            - Give the concerned consultant an update on the patient's condition
            and any necessary investigations.{" "}
          </div>

          <div>- Participate in in-service education and training. </div>

          <div>
            - Proper documentation of documents such as admissions/discharge.{" "}
          </div>

          <div>
            - Write a prescription that is easy to read and understand. Don't
            forget to include the date and time of the prescription as well as
            any modifications made during rounds.
          </div>

          <div>
            - Update the continuation sheet and progress note every day in
            accordance with the course of treatment.{" "}
          </div>

          <div>
            - Keep track of the events and file reports in accordance with
            procedure.
          </div>

          <div>
            - Prescription medicine brands must be approved by the department
            head. Follow recommended treatment protocols.{" "}
          </div>

          <div>
            - Manage conflict, counsel and provide health education to patient
            and relatives.
          </div>

          <div>
            - Keep a professional demeanour during working hours and refrain
            from getting personally involved in politics, groupthink, or rumours
            among hospital employees.
          </div>

          <div>
            - Performs additional tasks as delegated by the director, line
            manager, hospital management, and immediate supervisor.{" "}
          </div>

          <div>
            - Verify that the required signatures on all unsent forms
            (preoperative and high risk consents) have been obtained.
          </div>
          <br />
          <div className="crr-p1 mt-3">Skills</div>
          <ul>
            <li>Time Management.</li>
            <li>Proven experience as a paramedic.</li>
            <li>
              Knowledge of medical procedures, terminology and medications.
            </li>
            <li>
              Ability to stay calm and make the right decisions in adverse
              conditions.
            </li>
            <li>
              Excellent working knowledge of minor medical equipment and
              devices.
            </li>
          </ul>
          <br />
          <hr />
          <br />
          <br />
          <Link onClick={() => load("/apply")} className="cr-btn btn">
            Apply now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Career;
