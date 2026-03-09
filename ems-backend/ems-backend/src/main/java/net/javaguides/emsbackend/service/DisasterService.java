package net.javaguides.emsbackend.service;

import net.javaguides.emsbackend.dto.DisasterDto;

import java.util.List;

public interface DisasterService {
    DisasterDto creatDisaster(DisasterDto disasterDto);

    DisasterDto getDisasterById(Long disasterId);

    List<DisasterDto> getAllDisasteres();

    DisasterDto upadateDisaster(Long disasterId, DisasterDto updatedDisaster);

    void deleteDisaster(long disasterId);
}
