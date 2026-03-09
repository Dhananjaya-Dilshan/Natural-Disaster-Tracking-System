package net.javaguides.emsbackend.mapper;

import net.javaguides.emsbackend.dto.DisasterDto;
import net.javaguides.emsbackend.entity.Disaster;

public class DisasterMapper {
    public static DisasterDto mapToDisasterDto(Disaster disaster){
        return new DisasterDto(
                disaster.getId(),
                disaster.getDisasterName(),
                disaster.getPicture(),
                disaster.getLocation(),
                disaster.getDetails(),
                disaster.getDate()



        );
    }
    public static Disaster mapToDisaster(DisasterDto disasterDto){
        return new Disaster(
                disasterDto.getId(),
                disasterDto.getDisasterName(),
                disasterDto.getPicture(),
                disasterDto.getLocation(),
                disasterDto.getDetails(),
                disasterDto.getDate()




        );

    }


}
