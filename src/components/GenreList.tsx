import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error } = useGenres();
  return (
    <div>
      {error && "error"}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
