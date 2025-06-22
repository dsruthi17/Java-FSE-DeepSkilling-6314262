package ecommercesearch;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Product {
    private int productId;
    private String productName;
    private String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String getProductName() {
        return productName;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}
class SearchAlgorithms {
    public static Product linearSearch(List<Product> products, String targetName) {
        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(List<Product> products, String targetName) {
        
        Collections.sort(products, Comparator.comparing(Product::getProductName));

        int left = 0, right = products.size() - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            Product midProduct = products.get(mid);

            int comparison = midProduct.getProductName().compareToIgnoreCase(targetName);

            if (comparison == 0) {
                return midProduct; 
            } else if (comparison < 0) {
                left = mid + 1; 
            } else {
                right = mid - 1; 
            }
        }
        return null; 
    }
}

public class ProductSearch {
    public static void main(String[] args) {
        List<Product> products = new ArrayList<>();
        products.add(new Product(1, "Laptop", "Electronics"));
        products.add(new Product(2, "Shampoo", "Toiletries"));
        products.add(new Product(3, "Phone", "Electronics"));
        products.add(new Product(4, "Book", "Stationery"));

        System.out.println("Linear Search:");
        Product result = SearchAlgorithms.linearSearch(products, "Phone");
        if (result != null) {
            System.out.println("Found: " + result);
        } else {
            System.out.println("Product not found.");
        }

        System.out.println("\nBinary Search:");
        result = SearchAlgorithms.binarySearch(products, "Phone");
        if (result != null) {
            System.out.println("Found: " + result);
        } else {
            System.out.println("Product not found.");
        }
    }
}

