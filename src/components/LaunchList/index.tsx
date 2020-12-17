import * as React from "react";
import { useLaunchListQuery, LaunchListQuery } from "../../generated/graphql";
import LaunchList from "./LaunchList";
import Spinner from "../Spinner";

const LaunchListContainer = () => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <Spinner />;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return <LaunchList data={data} />;
};

export default LaunchListContainer;
