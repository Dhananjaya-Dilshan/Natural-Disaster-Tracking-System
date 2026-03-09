package net.javaguides.emsbackend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name ="Disaster")

public class Disaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "DisasterName")
    private String DisasterName;

    @Column(name = "picture")
    private String picture;

    @Column(name = "location")
    private String location;

    @Column(name = "Details")
    private String Details;

    @Column(name = "Date")
    private String Date;
}
