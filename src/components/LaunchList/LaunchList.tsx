import * as React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { LaunchListQuery } from "../../generated/graphql";
import "./style.css";

interface ContainerProps {
  className: string;
  children: React.ReactNode;
  id: string | null;
}

const Container = ({ className, children, id }: ContainerProps) => (
  <Link to={`launch/${id}`}>
    <div className={className}>{children}</div>
  </Link>
);

interface StyledContainerProps {
  success: boolean | null;
}

const StyledContainer = styled(Container)<StyledContainerProps>`
  border: 1px solid #ccc;
  padding: 0.5em 1em;
  background: ${(props) => (props.success ? "green" : "firebrick")};
  color: white;

  :hover {
    opacity: 0.5;
  }
`;

interface LaunchListProp {
  data: LaunchListQuery;
}

const className = "LaunchList";

const LaunchList: React.FC<LaunchListProp> = ({ data }) => {
  return (
    <div className="LaunchList">
      <div style={{ display: "block", width: "100%", textAlign: "center" }}>
        <h3>Launches</h3>
      </div>
      <ol className={`${className}__list`}>
        {!!data.launchesPast &&
          data.launchesPast.map(
            (launch, i) =>
              !!launch && (
                <li key={i} className={`${className}__item`}>
                  <StyledContainer
                    id={launch.id ? launch.id : null}
                    success={
                      launch.launch_success ? launch.launch_success : null
                    }
                    className={className}
                  >
                    <h4>{launch.mission_name}</h4>
                    <p>{launch.launch_date_local}</p>
                  </StyledContainer>
                </li>
              )
          )}
      </ol>
    </div>
  );
};

export default LaunchList;
