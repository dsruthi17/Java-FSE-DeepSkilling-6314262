package singletonpattern;

class Logger{
    private static Logger instance;

    private Logger(){
        System.out.println("This is Logger constructor");
    }

    public static Logger getInstance(){
        if(instance == null){
            synchronized(Logger.class){
                if(instance == null){
                    instance = new Logger();
                }
            }
        }
        return instance;
    }
    public void log(String message){
        System.out.println("Log: "+message);
    }
}

public class Singleton{
    public static void main(String[] args){
        Logger lg1 = Logger.getInstance();
        Logger lg2 = Logger.getInstance();
        System.out.println("Logger 1 is same as Logger 2: "+(lg1 == lg2));
    }
}