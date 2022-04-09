import { FormRow, FormRowSelect, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    url,
    salary,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    contact,
    handleChange,
    clearValues,
    createJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!position || !company || !jobLocation || !contact) {
    //   displayAlert();
    //   return;
    // }
    if (isEditing) {
      // eventually editJob()
      displayAlert();
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(`${name}:${value}`);
    handleChange({ name, value });
  };

  return (
    <>
      <Wrapper>
        <form className="form">
          <h3>{isEditing ? "edit job" : "add job"} </h3>
          {showAlert && <Alert />}

          {/* position */}
          <div className="form-center">
            <FormRow
              type="text"
              name="position"
              value={position}
              handleChange={handleJobInput}
            />
            {/* company */}
            <FormRow
              type="text"
              name="company"
              value={company}
              handleChange={handleJobInput}
            />
            {/* url */}
            <FormRow
              type="text"
              name="url"
              value={url}
              handleChange={handleJobInput}
            />
            {/* salary */}
            <FormRow
              type="text"
              name="salary"
              value={salary}
              handleChange={handleJobInput}
            />
            {/* location */}
            <FormRow
              type="text"
              labelText="job location"
              name="jobLocation"
              value={jobLocation}
              handleChange={handleJobInput}
            />
            {/* contact */}
            <FormRow
              type="text"
              labelText="contact person"
              name="contact"
              value={contact}
              handleChange={handleJobInput}
            />
            {/* job type */}
            <FormRowSelect
              labelText="job type"
              name="jobType"
              value={jobType}
              handleChange={handleJobInput}
              list={jobTypeOptions}
            />
            {/* job status */}
            <FormRowSelect
              name="status"
              value={status}
              handleChange={handleJobInput}
              list={statusOptions}
            />
            {/* btn container */}
            <div className="btn-container">
              <button
                className="btn btn-block submit-btn"
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                submit
              </button>
              <button
                className="btn btn-block clear-btn"
                onClick={(e) => {
                  e.preventDefault();
                  clearValues();
                }}
              >
                clear
              </button>
            </div>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default AddJob;
