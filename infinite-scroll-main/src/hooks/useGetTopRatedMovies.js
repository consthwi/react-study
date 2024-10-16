import { useInfiniteQuery } from "@tanstack/react-query";

// movies 가져오는 함수
const fetchTopRatedMovies = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  return res.json();
};

const useGetTopRatedMovies = () => {
  return useInfiniteQuery({
    queryKey: ["top-rated-movie"],
    // useInfiniteQuery는 기본으로 pageParam을 가지고 있다.
    queryFn: ({ pageParam }) => {
      return fetchTopRatedMovies(pageParam);
    },
    getNextPageParam: (last) => {
      if (last.page < last.total_pages) {
        return last.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
};

export default useGetTopRatedMovies;
