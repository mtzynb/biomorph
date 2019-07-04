Overview
    This is a Simple Evolution Program, based on the book The Blind Watchmaker, Richard Dawkins.
    The Evolution program, Dawkins' BioMorph, or the Dawkins evolution program is a thought experiment and a variety of computer simulations
    illustrating it. According to Richard Dawkins, biological variations from one generation to the next result from genetic mutations;
    given enough time, these will give birth to the remarkable complexity of present-day biological life. Without the need of a God or
    any superior intelligence. To illustrate and demonstrate his point of view, he developed the program called by him Evolution.
    The program generates symmetrical figures from dots and lines. To human eyes, these figures looks like many objects
    from the real world like a bat, a spider, a fox and so on. (more)

Implementation
    I inspired from the artificial selection of Dawkins and tried to implement Dawkins’ Biomorph by myself.
    on the home page of the application you can see a grid of 15 cells. Each of the 15 cells are trying to remind us of an animal or an object,
    after passing some iterations. We can call them biomorphs as well.
    On each cell we have a creature, these little creatures are made up 20 genes.
    Each gene has a responsibility for the phenotype of creatures.
    To simulate genes on the computer, an array can be used. So 20 genes are stored in an array with the length of 20 including random numbers.

Gens:
    •	First 15 genes are 15 numbers between -9 and 9. These are the genes that control the skeleton of my creatures. I used randomly 7 genes of 15 to draw creatures on each cell of the grid.
    •	Other genes:
            One for length of creatures (a random integer number between 2 to 12)
            One for line weight. (a random integer number between 1 to 2)
            One gene for the percentage of red color (a random integer number between 0 to 250)
            One gene for the percentage of blue color (a random integer number between 0 to 250)
            One gene for the percentage of  green color (a random integer number between 0 to 250)
    The last 3 genes together would control the creature’s color.

    Now that we know what the genes of these little biomorphs are, let’s go further:
    As I said, in my application on the home page, you can see a grid of 15 creatures (biomorphs).
    The biomorph in the center of the grid which is marked with a brighter border, is the parent of the other 14 biomorphs.
    Each time refreshing the home page, the parent biomorph(biomorph in the center of the grid) will be formed(Based on its 20 genes) first.
    The other 14 little biomorphs are forming based on their parent.

    In this step of my application, for the creation of 14 biomorph children, only one mutation is happening:
    (cross over mutations or mutation with higher rate may be implement in the future)
    For each child:

        1.	Duplicate the whole gene of its parent.
        2.	Use the duplicated gene and randomly find one gene and mutate that gene.
        3.	Note that for each child we have still 20 genes. Each child’s gene has so much similarity to its parent, however only one gene can be different.
            So each parent can have at most 20 different children, (because of single mutation method)
            But I decided to use only 14 children for each parent.

    Because the mutation is completely random, we have no idea what would happen to the parent’s children.
    That single Mutation can be on any of the 20 genes, for example, we can see that the parent biomorph is colored red
    but one of its child has a different color than its parent, it shows that one of the 3 genes for colors have chosen to be mutated
    and because of that the child doesn’t have the red color. another mutation can be on the line’s weight gene,
    if the program randomly decides to mutate the gene that controls the line weights of the creature,
    we would witness that the child has a different line weight than its parent. So any single mutation of 20 genes can make the child vary from its parent.
    Now that we know more about the creation of my biomorphs, let’s find out the whole goal of this application.

In this application, I have tried to simulate the artificial selection that Dawkins has defined.

    •	Dawkins wants to show that the complexity found in nature has no designer. He firmly believes that natural selection acts as an intelligent designer itself.
    •	For this he uses a computational function that generates computational forms (with a limit of recursive iterations) based on nine parameters which he calls genes.
    •	He establishes a bilateral symmetry as a fixed condition (Hermann Rorschach used the same parameter to develop his ten inkblots)
    •	He chooses a designer as the selective force: an intelligent human being. At each iteration he decides what form will survive.
    •	He selects and defines when to stop and what the figure means.

    In my program, when creatures on the grid (one parent and its 14 children) are formed, it is time for human(user) to show his role. Human has the role to select one of the created creatures that likes. The selected creature would be a new parent. The next generation of biomorphs starts from this new parent, then the program repeats the process of the single mutations on the new parent’s gene to reconstruct the new 14 children. (as described earlier). The new parent is shown on the center of the grid and its children around it.
    This process continues till the user finds a biomorph that is similar to an animal or an abject.
    In my program the number of iterations are based on the user’s patience . :D
    There is no grantee about the iterations that will get the user to his point. It can take a long time to get a satisfactory biomorph, or a short time.

Development tools
    The program is a web based application, designed with bootstrap and canvas html elements.

