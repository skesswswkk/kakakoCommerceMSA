package com.example.orderservice.service;

import com.example.orderservice.dto.OrderDto;
import com.example.orderservice.dto.OrderStatus;
import com.example.orderservice.jpa.OrderEntity;
import com.example.orderservice.jpa.OrderRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
public class OrderServiceImpl implements OrderService{
    OrderRepository orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public OrderDto createOrder(OrderDto orderDetails) {
        //.setOrderId()
        orderDetails.setOrderId(UUID.randomUUID().toString());
        //.setTotalPrice()
        orderDetails.setTotalPrice(orderDetails.getQty() * orderDetails.getUnitPrice());

        //orderDto -> orderEntity 변환
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        OrderEntity orderEntity = modelMapper.map(orderDetails, OrderEntity.class);

        //save
        orderRepository.save(orderEntity);

        //dto 타입 반환
        OrderDto returnOrderDto = modelMapper.map(orderEntity, OrderDto.class);
        return returnOrderDto;
    }

    @Override
    public OrderDto getOrderByOrderId(String orderId){
        OrderEntity orderEntity = orderRepository.findByOrderId(orderId);
        OrderDto orderDto = new ModelMapper().map(orderEntity, OrderDto.class);

        return orderDto;
    }

    @Override
    public Iterable<OrderEntity> getOrdersByUserId(String userId) {
        return orderRepository.findByUserId(userId);
    }

    /** 주문 취소 (3) : ServiceImpl */
    @Override
    public void cancelOrder(String orderId) {
        //주문 엔티티 조회
        OrderEntity orderEntity = orderRepository.findByOrderId(orderId);
        //주문 취소
        orderEntity.cancel();
    }
}
