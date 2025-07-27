package org.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(ParameterizedLoggingExample.class);

    public static void main(String[] args) {
        int userId = 123;
        String operation = "login";

        logger.info("User with ID {} performed a {} operation", userId, operation);
        logger.error("Failed operation {} for user ID {}", operation, userId);
    }
}
