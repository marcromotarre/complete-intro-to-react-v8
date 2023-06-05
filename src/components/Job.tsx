import { Job as JobInterface } from "../interfaces/Job";

const Job = (job: JobInterface) => {
  const { roleName, startDate, endDate, company, description } = job;

  const formatDates = (startDate, endDate) => {
    return `${new Date(startDate).getFullYear()} - ${
      endDate ? new Date(endDate).getFullYear() : "ACTUAL"
    }`;
  };
  return (
    <div className="grid grid-cols-1 gap-y-1">
      <div className="flex">
        <h1 className="pr-2 decoration-slate-600">{roleName}</h1>
        <h6>{formatDates(startDate, endDate)}</h6>
      </div>
      <h6>{company.name}</h6>
      <p>{description}</p>
    </div>
  );
};

export default Job;

const styles = {};
