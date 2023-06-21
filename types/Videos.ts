export interface Video {
  kind: string;
  etag: string;
  id: string;
  snippet: any;
  contentDetails: any;
}

export interface Videos {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Video[];
}
