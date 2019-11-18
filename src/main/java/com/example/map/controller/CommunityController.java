package com.example.map.controller;

import com.example.map.dao.CommunityMapper;
import com.example.map.domain.Community;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CommunityController {
    @Autowired
    private CommunityMapper communityMapper;
    @RequestMapping("/add")
    public void addCommunity(Community community){
        communityMapper.insert(community);
    }

    @RequestMapping("/update")
    public void updateCommunity(Community community){
        communityMapper.updateByPrimaryKey(community);
    }

    @RequestMapping("/all")
    public List<Community> getAll(){

        return communityMapper.selectAll();
    }

    @RequestMapping("/search")
    public Community searchCommunity(@RequestParam("keyword") String keyword){
        if(keyword=="")
            return null;
        if(isNumeric(keyword))
            return communityMapper.selectByDoorNum(Integer.parseInt(keyword));
        else
            return communityMapper.selectByName(keyword);
    }


    public static boolean isNumeric(String str){
        for (int i = str.length();--i>=0;){
            if (!Character.isDigit(str.charAt(i))){
                return false;
            }
        }
        return true;
    }

}
