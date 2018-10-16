
import  org.json.simple.JSONArray;
import  org.json.simple.JSONObject;
import  org.json.simple.parser.JSONParser;
import  javax.net.ssl.HttpsURLConnection;
import java.io.BufferedReader;
import  java.io.InputStreamReader;
import  java.net.URL;
import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;
// Created by ahmedengu.

public class Oxfordextends UnicastRemoteObjectimplements OxfordInterface{
  protectedOxford() throws RemoteException{
  }
  
public String dictionary(String word){
  JSONParser parser=new  JSONParser();
  String ret="404"
  try{
    final String result=getRequest(buildURL(word));
    final Object parse=parser.parse(result);
    catch (Exception e){
      System.out.println(e);
    }
    return ret
  }
  private String buildURL(final  String word){
    final String language="en";
    final String word_id=word.toLowerCase();
    return "https://od-api.oxforddictionaries.com:443/api/v1/entries/" + language + "/" + word_id;
  }// Created url Normalized frequency
  
  private String buildURLFrequency(final  String word){
    final String language="en";
    final String word_id=word.toLowerCase();
    return "https://od-api.oxforddictionaries.com:443/api/v1/stats/frequency/word/" + language + "/?corpus=nmc&lemma=" + word_id;
  }
  
  private String getRequest(String link){
    final  String app_id="4018a1e2"
    final  String app_key="33f017eb98a09457c65eb26868a0ea94"
    try{
      URL url=new  URL(link)
      HttpsURLConnection urlConnection=(HttpsURLConnection) url.openConnection();
      urlConnection.setRequestProperty("Accept", "application/json");
      urlConnection.setRequestProperty("app_id", app_id);
      urlConnection.setRequestProperty("app_key", app_key);
      
      // read the output from the server
      BufferedReader reader=new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
      StringBuilder stringBuilder=new StringBuilder();
      
      String=null
      while ((line=reader.readLine()) !=null){
        stringBuilder.append(line + "\n");
      }
      return stringBuilder.toString();
    }
    catch (Exeption e){
      e.printStackTrace();
      return e.toString();
    }
  }
}
