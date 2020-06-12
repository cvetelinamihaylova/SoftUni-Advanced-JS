function solve(tickets, criteria) {
    class Ticket {
        constructor(input) {
            let[destination, price, status] = input.split('|');
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    return tickets.map(t=> new Ticket(t)).sort(comparator);

    function comparator(a, b) {
        try {
            return a[criteria].localeCompare(b[criteria]);
        } catch{
            return a[criteria] - b[criteria];

        }
    }
}