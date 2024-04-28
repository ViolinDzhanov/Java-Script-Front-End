function solve(input) {
    let movies = [];
    for (let row of input) {
       
        let addMovieComand = "addMovie ";
        let directedByComand = " directedBy ";
        let onDateComand = " onDate ";

        if (row.includes(addMovieComand)){
            let movie = {
                name: row.substring(addMovieComand.length),
            } 

            movies.push(movie);
        }else if (row.includes(directedByComand)){
            const [movieName, director] = row.split(directedByComand);
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.director = director;
            }
        }else if(row.includes(onDateComand)){
            const [movieName, ondate] = row.split(onDateComand);
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.date = ondate;
            }
        }

    }
    movies.filter(movie => movie.director && movie.date)
    .forEach(movie => console.log(JSON.stringify(movie)));
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)