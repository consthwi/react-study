import { useEffect } from "react";
import "./App.css";
import useGetTopRatedMovies from "./hooks/useGetTopRatedMovies";
import { Grid, styled } from "@mui/system";
import { InView, useInView } from "react-intersection-observer";

// const MovieContainer = styled(태그) (() => ());

const MovieContainer = styled(Grid)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  height: "400px",
}));

const MovieItem = styled("div")(({ theme }) => ({
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  textAlign: "center",
}));

const MovieImg = styled("img")(({ theme }) => ({
  width: "200px",
  height: "300px",
  objectFit: "cover",
  borderRadius: "8px",
}));

const MovieTitle = styled("h2")(({ theme }) => ({
  fontSize: "1.2rem",
  margin: "10px 0 5px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "200px",
}));

function App() {
  // useInfiniteQuery => fetchNextPage, hasNextPage
  const {
    data,
    isLoading,
    isError,
    fetchNextPage, // useInfiniteQuery Fn 호출
    hasNextPage,
    isFetchNextPage,
  } = useGetTopRatedMovies();

  // 참조된 타겟이 보이면, inView true, or false
  const { ref, inView } = useInView();

  // load more가 화면에 보이는 순간
  useEffect(() => {
    console.log("화면에 있습니까?", inView);
    // 다시 fetchNextPage 호출
    if (inView && hasNextPage && !isFetchNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  // 데이터 확인
  // console.log("ddd", data);

  return (
    <div className="App">
      {/* <Grid>
        <Grid></Grid>
      </Grid> */}
      {/* Grid container를 주면 Grid를 묶는 wrapper의 역할을 한다. 그리고 spacing이 옵션 */}
      <Grid container spacing={2} sx={{ maxWidth: "1000px", margin: "auto" }}>
        {data?.pages.map((page) => {
          return page.results.map((movie) => {
            return (
              // <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <MovieContainer item sm={4} xs={12} key={movie.id}>
                <MovieItem>
                  <MovieImg
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <MovieTitle>{movie.title}</MovieTitle>
                </MovieItem>
              </MovieContainer>
            );
          });
        })}
      </Grid>

      <h1 ref={ref} style={{ textAlign: "center" }}>
        Load More
      </h1>
    </div>
  );
}

export default App;
