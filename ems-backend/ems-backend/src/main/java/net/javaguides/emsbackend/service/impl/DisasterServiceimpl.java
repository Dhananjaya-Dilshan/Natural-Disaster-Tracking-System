package net.javaguides.emsbackend.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.emsbackend.dto.DisasterDto;
import net.javaguides.emsbackend.entity.Disaster;
import net.javaguides.emsbackend.exception.ResourceNotFoundException;
import net.javaguides.emsbackend.mapper.DisasterMapper;
import net.javaguides.emsbackend.repository.DisasterRepository;
import net.javaguides.emsbackend.service.DisasterService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class DisasterServiceimpl implements DisasterService {

            private DisasterRepository disasterRepositoty;
    @Override
    public DisasterDto creatDisaster(DisasterDto disasterDto) {

        Disaster disaster = DisasterMapper.mapToDisaster(disasterDto);
        Disaster saveDisaster =disasterRepositoty.save(disaster);
        return DisasterMapper.mapToDisasterDto(saveDisaster);
    }

    @Override
    public DisasterDto getDisasterById(Long disasterId) {
       Disaster disaster= disasterRepositoty.findById(disasterId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(" Disaster is not exiset with given id :" + disasterId));
        return DisasterMapper.mapToDisasterDto(disaster);
    }

    @Override
    public List<DisasterDto> getAllDisasteres() {
        List <Disaster> disasters = disasterRepositoty.findAll();
        return disasters.stream().map((disaster) -> DisasterMapper.mapToDisasterDto(disaster))
                .collect(Collectors.toList());
    }

    @Override
    public DisasterDto upadateDisaster(Long DisasterId, DisasterDto updatedDisaster) {

        Disaster disaster= disasterRepositoty.findById(DisasterId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(" Disaster is not exiset with given id :" + DisasterId));

        disaster.setDisasterName(updatedDisaster.getDisasterName());
        disaster.setPicture(updatedDisaster.getPicture());
        disaster.setLocation(updatedDisaster.getLocation());
        disaster.setDetails(updatedDisaster.getDetails());

         Disaster updatedDisasterobj =disasterRepositoty.save(disaster);

        return DisasterMapper.mapToDisasterDto(updatedDisasterobj);
    }

    @Override
    public void deleteDisaster(long disasterId) {
        Disaster disaster= disasterRepositoty.findById(disasterId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(" Disaster is not exiset with given id :" + disasterId));
        disasterRepositoty.deleteById(disasterId);
    }


}
