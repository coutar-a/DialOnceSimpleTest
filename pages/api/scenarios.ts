import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  node: {
    id: string;
    name: string;
    productionVersion: {
      id: string;
      name: string;
      lastPublishedAt: string;
    };
  };
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json([
    {
      node: {
        id: "U2NlbmFyaW86NjBhM2I1ZmQwNzM3NmE2MzAzMTY2Njg2",
        name: "All Analytics",
        productionVersion: {
          id: "U2NlbmFyaW9WZXJzaW9uOjYwZTQ0MmEzYmUxMmI0MjI5MzcyOWQ2OA==",
          name: "2021/07/06 13:55 color test 2",
          lastPublishedAt: "2021-07-06T11:55:12.981Z",
        },
      },
    },
    {
      node: {
        id: "U2NlbmFyaW86NjIwNjFmMmRiYTcyMTJiMDYxNGYyOGQ3",
        name: "Complex Data Generator Scenario",
        productionVersion: {
          id: "U2NlbmFyaW9WZXJzaW9uOjYyMDYyM2QzZmU0OWI0NzUyM2I5ODczMQ==",
          name: "Real first draft",
          lastPublishedAt: "2022-02-11T08:58:31.726Z",
        },
      },
    },
    {
      node: {
        id: "U2NlbmFyaW86NjE1MzFlMTM4MWJkMWYzOTFhZjEwZTY2",
        name: "Cypress Scenario",
        productionVersion: {
          id: "U2NlbmFyaW9WZXJzaW9uOjYxN2E0OWFhZDczMjE3MWM3OTA3MjY1NA==",
          name: "2021/10/28 08:59",
          lastPublishedAt: "2021-10-28T06:59:16.359Z",
        },
      },
    },
  ]);
}
