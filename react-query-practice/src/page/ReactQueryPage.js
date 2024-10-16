import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

const ReactQueryPage = () => {
  const fetchPost = () => {
    return axios.get("http://localhost:3004/posts");
  };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
    retry: 1,
    // 불러오는 data를 callback fn으로 정제 가능
    staleTime: 10000,
    // fresh로 유지되는 시간이 10초이기 때문에,
    // 그동안 api호출을 하지 않는다. (정적인 자료) staleTime < gcTime
    select: (data) => {
      return data.data;
    },
    gcTime: 5000,
    // garbage collect time
  });

  console.log("ddd:", data, "isLoading:", isLoading);
  console.log("error", isError, error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="ReactQueryPage">
      {data.map((item, idx) => {
        return <div key={idx}>{item.title}</div>;
      })}
    </div>
  );
};

export default ReactQueryPage;
