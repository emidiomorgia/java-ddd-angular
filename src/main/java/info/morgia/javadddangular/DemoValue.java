package info.morgia.javadddangular;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


@Entity
@Table(name = "DemoValues")
public class DemoValue {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    public int getId() {
        return id;
    }
    public void setId(int value){
        id=value;
    }

    private int intValue;
    public int getIntValue(){
        return intValue;
    }
    public void setIntValue(int value){
        intValue=value;
    }

    private String stringValue;
    public String getStringValue(){
        return stringValue;
    }
    public void setStringValue(String value){
        stringValue=value;
    }

}
