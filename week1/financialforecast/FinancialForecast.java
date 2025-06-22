package financialforecast;

public class FinancialForecast {

    public static double calculateFV(double initial, double growthRate, int years) {
        if (years == 0) {
            return initial;
        }

        return calculateFV(initial, growthRate, years - 1) * (1 + growthRate);
    }

    public static double calculateFVIterative(double initial, double growthRate, int years) {
        double futureValue = initial;
        for (int i = 1; i <= years; i++) {
            futureValue *= (1 + growthRate);
        }
        return futureValue;
    }

    public static void main(String[] args) {
        double initial = 1000.0; 
        double growthRate = 0.05;         
        int years = 5;                   

        double futureValueRecursive = calculateFV(initial, growthRate, years);
        double futureValueIterative = calculateFVIterative(initial, growthRate, years);
        System.out.printf("Future Value (Recursive) after %d years: %.2f%n", years, futureValueRecursive);
        System.out.printf("Future Value (Iterative) after %d years: %.2f%n", years, futureValueIterative);
    }
}
