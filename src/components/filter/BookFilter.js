import "./BookFilter.css";

const BooksFilter = ({valueYear,currentYear}) => {


    const selectValueHandler = (e) => {
        let valueSelect = e.target.value
        valueYear(valueSelect)
    };

    return (
    <div className="Books-filter">
        <div className="Books-filter__control">
        <label>Filter by year</label>
        <select onChange={selectValueHandler} value={currentYear}>
            <option value="all">all</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
        </select>
        </div>
    </div>
    );
};

export default BooksFilter;