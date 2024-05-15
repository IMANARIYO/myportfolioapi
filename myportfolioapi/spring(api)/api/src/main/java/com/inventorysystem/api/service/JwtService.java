package com.inventorysystem.api.service;

import com.inventorysystem.api.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtService {
    public String extractUsername(String token){
  return extractClaims(token, Claims::getSubject);
 }
public boolean isValid(String token, UserDetails user){
     String username=extractUsername(token);
    return (username.equals(user.getUsername()))&& !isTokenExpired(token);
}
   public boolean isTokenExpired(String token){
    return extractExpiration(token).before(new Date());
   }
   private  Date extractExpiration(String token){
     return   extractClaims(token,Claims::getExpiration);
   }
public  <T> T extractClaims(String token , Function<Claims,T> resolver){
    Claims claims=extractAllClaims(token);
    return resolver.apply(claims);
}
  private Claims extractAllClaims(String token){
    return  Jwts
            .parser()
            .setSigningKey(getSignKey())
            .parseClaimsJws(token)
            .getBody();
}
  public  String generateToken(UserDetails userDetails ){
      return Jwts
        .builder()
        .setSubject(userDetails.getUsername())
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() +  24*60*60*1000))
        .signWith(getSignKey(), SignatureAlgorithm.ES256)
        .compact();

}
private Key getSignKey(){
    String SECRET_KEY = "8f73ee76d68526e1d98ee2c49866758cb95948609768f30b50b00e04c54ddc80";
    byte[] keyBytes= Decoders.BASE64.decode(SECRET_KEY
  );
  return Keys.hmacShaKeyFor(keyBytes);
}
}
