import {AvailableQuery, SearchResponse} from "./types";
import axios from "axios";

export function searchImage(query?: AvailableQuery): Promise<SearchResponse> {
  return axios.get('images/search', {
    params: query,
  }).then(response => response.data)
}
