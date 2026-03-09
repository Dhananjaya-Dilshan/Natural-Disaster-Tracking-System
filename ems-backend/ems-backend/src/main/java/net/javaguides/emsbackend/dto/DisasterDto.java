package net.javaguides.emsbackend.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DisasterDto {
    private long id;


    private String DisasterName;


    private String picture;


    private String location;


    private String Details;


    private String Date;

}
