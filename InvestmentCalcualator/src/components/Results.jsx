import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  // console.log(input);
  const resultData = calculateInvestmentResults(input);
  // console.log(resultData);
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest Year</th>
            <th>Total Interest</th>
            <th>Investment Capital</th>
          </tr>
        </thead>
        <tbody>
            {resultData.map((data) => {
                const TotalInterest = data.interest + data.annualInvestment * data.year;
                const InvestmentCapital = input.initialInvestment + data.annualInvestment * data.year;
                return (
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(TotalInterest)}</td>
                        <td>{formatter.format(InvestmentCapital)}</td>
                    </tr>
                );
            })}
        </tbody>
      </table>
    </>
  );
}
