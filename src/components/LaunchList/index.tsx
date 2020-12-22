import * as React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import LaunchList from "./LaunchList";
import Spinner from "../Spinner";
import Error from "../Error";

const LaunchListContainer = () => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <Spinner />;
  }

  if (error || !data) {
    return <Error />;
  }

  return <LaunchList data={data} />;
};

export default LaunchListContainer;
