import requests
from bs4 import BeautifulSoup
import csv

base_url = ''

def get_slant_magazine_games():
    base_url = "https://www.slantmagazine.com/games/the-100-best-video-games-of-all-time/"
    number_of_pages = 10

    slant_magazine_games = []
    for page_number in range(number_of_pages + 1):
        page = requests.get(f'{base_url}{page_number}')

        soup = BeautifulSoup(page.content, 'html.parser')
        titles = soup.find_all('h2', attrs={'class': None}, limit=10)

        for title in titles:
            slant_magazine_games.append(title.getText())
        
    return slant_magazine_games

def get_ign_2019_games():
    base_url = "https://www.ign.com/lists/top-100-games/"
    headers = {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
    
    page = requests.get(base_url, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')
    divs = soup.find_all('div', {'class':'item-heading'})

    ign_games = []
    for div in divs:
        ign_games.append(div.find('a').getText())

    return ign_games

def get_time_games():
    base_url = "https://time.com/4458554/best-video-games-all-time/"

    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find_all('h2', {'class':'size-2x-large'})

    time_games = []
    for game in games:
        for a_tag in game.findAll('a'):
            a_tag.unwrap()
            
        time_games.append(tuple(game.getText().split('.', 1)))
    
    return time_games

def get_popular_mechanics():
    base_url = "https://www.popularmechanics.com/culture/gaming/g134/the-100-greatest-video-games-of-all-time/?slide="
    number_of_slides = 100

    for current_slide in range(1, number_of_slides, step=10):
        page = requests.get(f'{base_url}{current_slide}')
        soup = BeautifulSoup(page.content, 'html.parser')
        div = soup.find('div', {'class':'slideshow-slide-hed'})
        print(div)

if __name__ == '__main__':
    time_games = get_time_games()
    print(time_games)

    with open('../data/time-magazine.csv', 'w', newline='') as myfile:
        csv_out = csv.writer(myfile, quoting=csv.QUOTE_ALL)
        csv_out.writerow(['position', 'game_title'])

        for row in time_games:
            csv_out.writerow(row)
            