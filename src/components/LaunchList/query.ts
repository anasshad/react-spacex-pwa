import gql from 'graphql-tag'

export const QUERY_LAUNCH_LIST = gql`
query LaunchList {
  launchesPast {
    id
    launch_date_local
    launch_success
    launch_year
    links {
      flickr_images
    }
    mission_name
  }
}

`;