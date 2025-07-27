package factorypattern;

interface Document{
    void open();
}

class WordDocument implements Document{
    @Override
    public void open(){
        System.out.println("Opening Word Document");
    }
}

class PdfDocument implements Document{
    @Override
    public void open(){
        System.out.println("Opening Pdf Document");
    }
}

class ExcelDocument implements Document{
    @Override
    public void open(){
        System.out.println("Opening Excel Document");
    }
}

abstract class DocumentFactory{
    public abstract Document createDocument();
}

class WordDocumentFactory extends  DocumentFactory{
    @Override
    public Document createDocument(){
        return new WordDocument();
    }
}

class PdfDocumentFactory extends  DocumentFactory{
    @Override
    public Document createDocument(){
        return new PdfDocument();
    }
}

class ExcelDocumentFactory extends  DocumentFactory{
    @Override
    public Document createDocument(){
        return new ExcelDocument();
    }
}

public class FactoryPattern{
    public static void main(String[] args) {
        DocumentFactory wordFac = new WordDocumentFactory();
        Document wordDoc = wordFac.createDocument();
        wordDoc.open();

        DocumentFactory pdfFac = new PdfDocumentFactory();
        Document pdfDoc = pdfFac.createDocument();
        pdfDoc.open();

        DocumentFactory excelFac = new ExcelDocumentFactory();
        Document excelDoc = excelFac.createDocument();
        excelDoc.open();
    }
}
