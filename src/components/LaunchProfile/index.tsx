import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";
import Spinner from "../Spinner";
import "./style.css";

interface Props extends RouteComponentProps {
  id?: string;
}

const LaunchProfileContainer = (props: Props) => {
  console.log(props.id);
  const { data, loading, error } = useLaunchProfileQuery({
    variables: { id: props.id ? props.id : "" },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Select a flight</div>;
  }

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;
