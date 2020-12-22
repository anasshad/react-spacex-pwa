import * as React from "react";
import { LaunchProfileQuery } from "../../generated/graphql";

//ImageSlider

interface ImageSliderProps {
  children: React.ReactNode;
}

const ImageSlider = ({ children }: ImageSliderProps) => {
  const childrenArray = React.Children.toArray(children);
  const [current, setCurrent] = React.useState<number>(0);

  const handleNext = () => {
    if (current < childrenArray.length - 1) {
      setCurrent((p) => p + 1);
    }
  };

  const handlePrevious = () => {
    if (current !== 0) {
      setCurrent((p) => p - 1);
    }
  };

  return (
    <div className="imageSlider_container">
      <div className="imageSlider_main">{childrenArray[current]}</div>

      <div className="imageSlider_buttons">
        <button onClick={handlePrevious}>{"<"}</button>
        <div className="imageSlider_miniimages">
          {childrenArray.map((child, i) => (
            <div
              key={i}
              className={current === i ? "imageSlider_current" : ""}
              onClick={() => setCurrent(i)}
            >
              {child}
            </div>
          ))}
        </div>
        <button onClick={handleNext}>{">"}</button>
      </div>
    </div>
  );
};

//LaunchProfile

interface LaunchProfileProps {
  data: LaunchProfileQuery;
}

const className = "LaunchProfile";

const LaunchProfile: React.FC<LaunchProfileProps> = ({ data }) => {
  if (!data.launch) {
    return <div>No launch available</div>;
  }
  return (
    <div className={className}>
      <h1
        className={
          data.launch.launch_success
            ? `${className}__success`
            : `${className}__failure`
        }
      >
        {data.launch.mission_name}
      </h1>
      <h3 className={`${className}__rocket`}>
        {data.launch.rocket && (
          <>
            <div>{` Rocket Name: ${data.launch.rocket.rocket_name}`}</div>
            <div>{`Rocket Type: ${data.launch.rocket.rocket_type}`}</div>
          </>
        )}
      </h3>
      <p className={`${className}__description`}>{data.launch.details}</p>
      {!!data.launch.links &&
        !!data.launch.links.flickr_images &&
        data.launch.links.flickr_images.length !== 0 && (
          <div className={`${className}__image-list`}>
            <ImageSlider>
              {data.launch.links.flickr_images.map((image, index) =>
                image ? (
                  <img
                    src={image}
                    // className={`${className}__image`}
                    key={image}
                    alt={data.launch?.rocket?.rocket_name + "_" + index}
                  />
                ) : null
              )}
            </ImageSlider>
          </div>
        )}
    </div>
  );
};

export default LaunchProfile;
