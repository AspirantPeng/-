package com.example.map.dao;

import com.example.map.domain.Community;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface CommunityMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table community
     *
     * @mbg.generated Tue Nov 05 16:55:16 CST 2019
     */
    int deleteByPrimaryKey(@Param("cenLat") String cenLat, @Param("cenLng") String cenLng);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table community
     *
     * @mbg.generated Tue Nov 05 16:55:16 CST 2019
     */
    int insert(Community record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table community
     *
     * @mbg.generated Tue Nov 05 16:55:16 CST 2019
     */
    Community selectByPrimaryKey(@Param("cenLat") String cenLat, @Param("cenLng") String cenLng);

    Community selectByName(String name);

    Community selectByDoorNum(int doorNum);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table community
     *
     * @mbg.generated Tue Nov 05 16:55:16 CST 2019
     */
    List<Community> selectAll();

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table community
     *
     * @mbg.generated Tue Nov 05 16:55:16 CST 2019
     */
    int updateByPrimaryKey(Community record);
}