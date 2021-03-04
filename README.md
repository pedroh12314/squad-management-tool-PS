# Inicialização
- entre em: /squad-management-tool-PS
- npm install
- npm run db
- ng serve -open
# Considerações
O desenvolvimento foi de grande aprendizado e desafio. Desde o início teve-se a 
preocupação de tentar usar o mínimo possível de bibliotecas css prontas. Assim, foi 
dedicado um tempo de 3 a 5 horas por dia, quando possível. Não foi possível 
implementar todas as fases, mas foi feito o melhor dentro da minha rotina dessa
semana.
Agradeço a oportunidade, e estou à disposição a qualquer momento.

# Squad Management Tool
## Phase 1
1. Implement Page Layout.
   	✓ 1.1Create placeholders for non implemented features.
2. Implement "My teams" section.
   	✓ 2.1 There is no need to implement Share action
   	✓ 2.2 User must be able to sort by name and description.
3. Ability to Create/Edit and Remove a team.
   	✓ 3.1Team information section only.
        ✓ 3.1.1 All fields but description and tags are mandatory.
        ✓ 3.1.2 Default value is empty for all fields.
        3.1.3 Team website must validate site URL.
        ✓ 3.1.4 You must highlight fields/labels whenever user tries to create/update a team with invalid information.
        ✓ 3.1.5 Current UI is displaying Team name as an example of an invalid field.
        ✓ 3.1.6 For tags field user must be able to enter a free text and tag will be created as soon as the user hits enter or semicolon.
4. Ability to see what player was the most/less picked on.
    ✓ 4.1 Replace images by player initials.
 
## Phase 2
1. Ability to search for a player name and see the list of players who matched the criteria.
2. Ability to add a player to a field position through drag n drop.
·         Once a player was added to the team, it should be disabled on search result list.
·         Whenever a user is added to a position, it's initials must be displayed. i.e. Cristiano Ronaldo (CR) / Zinedine Yazid Zidane (ZZ)
3. Save must store the team's players into application state.
 
## Phase 3
1. Implement "Top 5" section to the dashboard.
1.1 Whenever user clicks on a given team, it should open team configuration page.
2. Ability to configure and display a given formation from the list (Soccer field must display the positions accordingly). Options:
3 - 2 - 2 - 3
3 - 2 - 3 - 1
3 - 4 - 3
3 - 5 - 2
4 - 2 - 3 - 1
4 - 3 - 1 - 1
4 - 3 - 2
4 - 4 - 2
4 - 5 - 1
5 - 4 -1
** Whenever a formation is changed all current players must be removed.
3. Ability to see player information on hover (soccer field
 