package net.javaguides.emsbackend.controller;


import lombok.AllArgsConstructor;
import net.javaguides.emsbackend.dto.DisasterDto;
import net.javaguides.emsbackend.service.DisasterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Disaster")
@AllArgsConstructor
@CrossOrigin("*")

public class DisasterController {

    private DisasterService disasterService;

    // add Disaster rest api
    @PostMapping
    public ResponseEntity<DisasterDto> createDisaster(@RequestBody DisasterDto disasterDto){
       DisasterDto savedDisaster = disasterService.creatDisaster(disasterDto);
       return new ResponseEntity<>(savedDisaster, HttpStatus.CREATED);
    }


    // get  Disaster rest api
    @GetMapping("{id}")
    public ResponseEntity<DisasterDto> getDisasterById(@PathVariable("id") Long disasterId){
        DisasterDto disasterDto=disasterService.getDisasterById(disasterId);
        return ResponseEntity.ok(disasterDto);
    }


    // get  all Disasteres rest api
    @GetMapping
        public ResponseEntity<List<DisasterDto>> getAllDisasteres(){
            List<DisasterDto> disasteres =disasterService.getAllDisasteres();
            return ResponseEntity.ok(disasteres);
        }

    // updete Disaster rest api
    @PutMapping("{id}")
    public ResponseEntity<DisasterDto> updateDisaster(@PathVariable("id") Long disasterId,
                                                       @RequestBody DisasterDto updatedDisaster){
        DisasterDto disasterDto = disasterService.upadateDisaster(disasterId,updatedDisaster);
        return ResponseEntity.ok(disasterDto);
    }
    // delete Disaster rest api
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDisasteres(@PathVariable("id") long disasterId){
        disasterService.deleteDisaster(disasterId);
        return ResponseEntity.ok("disaster deleted sucesfully");
    }


}
