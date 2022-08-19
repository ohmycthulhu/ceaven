import {useQuery} from "react-query";
import {searchImage} from "../api/api";
import {AvailableQuery} from "../api/types";

function filterToKey(filter?: AvailableQuery) {
  return ['image'].join('-')
}

export function useImage(filter?: AvailableQuery) {
  return useQuery(
    filterToKey(filter),
    () => searchImage(filter),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  )
}
