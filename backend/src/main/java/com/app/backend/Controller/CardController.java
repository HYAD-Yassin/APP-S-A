package com.app.backend.Controller;


import com.app.backend.Model.Card;
import com.app.backend.Service.CardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
public class CardController {

    private final CardService cardService;

    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @GetMapping
    public List<Card> getAllCards() {
        return cardService.getAllCards();
    }

    @GetMapping("/user/{userId}")
    public List<Card> getCardsByUserId(@PathVariable Long userId) {
        return cardService.getCardsByUserId(userId);
    }
}
