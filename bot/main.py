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
    game_position = 100
    for div in divs:
        ign_games.append(tuple((game_position, div.find('a').getText())))
        game_position = game_position - 1

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

def get_metacrict():
    base_url = "https://www.metacritic.com/browse/games/score/metascore/all/all/filtered"
    headers = {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}

    page = requests.get(base_url, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find_all('tr', attrs={'class': None})

    metacrict_games = []
    game_position = 1
    for game in games:
        metacrict_games.append(tuple((game_position, game.find('h3').text)))
        game_position = game_position + 1

    return metacrict_games

def get_opencrict():
    base_url = "https://opencritic.com/browse/all?page="
    number_of_pages = 5

    opencrict_games = []
    game_position = 1

    for page_number in range(number_of_pages + 1):
        page = requests.get(f'{base_url}{page_number}')
        soup = BeautifulSoup(page.content, 'html.parser')
        games = soup.find_all('div', {'class':'banner-game-description'})
        
        for game in games:
            opencrict_games.append(tuple((game_position, game.find('strong').text)))
            game_position = game_position + 1

    return opencrict_games

def get_popular_mechanics():
    base_url = "https://www.popularmechanics.com/culture/gaming/g134/the-100-greatest-video-games-of-all-time/?slide="
    number_of_slides = 100
    popular_mechanics = []

    for current_slide in range(1, number_of_slides, 5):
        page = requests.get(f'{base_url}{current_slide}')
        soup = BeautifulSoup(page.content, 'html.parser')
        games = soup.findAll('div', {'class':'slideshow-slide-hed'})

        for game in games:
            if game != None:
                game = game.getText().strip()
                game = game.split("(")[0]
                split_by = '.'

                if "Super Mario World" in game or "Dungeon Master" in game or "Uncharted 2: Among Thieves" in game:
                    split_by = ':'
                
                game_tuple = game.split(split_by, 1)
                game_tuple = tuple((game_tuple[0], game_tuple[1].strip().replace('é', 'e')))
                found = [item for item in popular_mechanics if item[1] == game_tuple[1]]
                if found == []:
                    popular_mechanics.append(game_tuple)
    
    return popular_mechanics

def get_slant_magazine():
    base_url = "https://www.slantmagazine.com/games/the-100-best-video-games-of-all-time/"
    number_of_pages = 10

    slant_magazine_games = []

    for page_number in range(1, number_of_pages + 1):
        page = requests.get(f'{base_url}{page_number}')
        soup = BeautifulSoup(page.content, 'html.parser')
        games = soup.find_all('h2', attrs={'class': None}, limit=10)
        
        for game in games:
            if game != None:
                game = game.getText().replace("Ō", "O").split("(")[0]
                game = game.split('.', 1)
                slant_magazine_games.append(tuple((game[0], game[1].strip())))

    return slant_magazine_games

def save_csv_file(games, file_name):
    with open('../extracted_data/' + file_name + '.csv', 'w', newline='') as myfile:
        csv_out = csv.writer(myfile, quoting=csv.QUOTE_ALL)
        csv_out.writerow(['position', 'game_title'])

        for game in games:
            csv_out.writerow(game)

if __name__ == '__main__':
    games = get_slant_magazine()
    save_csv_file(games, 'slant-magazine')


            