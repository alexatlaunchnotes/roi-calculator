export function calculateMoneySaved(timeSavedPercentage: number, numberOfEmployees: number, averageAnnualSalary: number) {
    const totalAnnualSalary = numberOfEmployees * averageAnnualSalary
    const moneySaved = timeSavedPercentage * totalAnnualSalary
    return moneySaved
}
