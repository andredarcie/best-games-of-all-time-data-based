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

def get_ign_2022_games():
    base_url = "https://www.ign.com/articles/the-best-100-video-games-of-all-time"
    headers = {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
    
    page = requests.get(base_url, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')
    divs = soup.find_all('h2', {'class': None})

    ign_games = []
    game_position = 100
    for div in divs:
        ign_games.append(tuple((game_position, div.find('strong').getText().split('.', 1)[1])))
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
        game_title = game.find('h3').text

        found = False

        if len(metacrict_games) > 0:
            for game in metacrict_games:
                if game[1] == game_title:
                    found = True

        if not found:
            metacrict_games.append(tuple((game_position, game_title)))
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

def get_game_designing():
    base_url = "https://www.gamedesigning.org/popular-video-games/"
    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find_all('h2', attrs={'class': None})

    games_designing = []
    for game in games:
        game_tuple = game.getText().split('.', 1)
        games_designing.append(tuple((game_tuple[0], game_tuple[1].strip())))

    return games_designing


def get_esquire():
    base_url = "https://www.esquire.com/lifestyle/g26572573/best-video-games-ranked/"
    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find_all('span', attrs={'class': 'listicle-slide-hed-text'})
    
    extracted_games = []
    for game in games:
        game_tuple = game.getText().split('.', 1)
        extracted_games.append(tuple((game_tuple[0], game_tuple[1].strip())))

    return extracted_games

def get_polygon():
    base_url = "https://www.polygon.com/features/2017/12/1/16707720/the-500-best-games-of-all-time-100-1"
    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find_all('h2', attrs={'class': None})
    
    extracted_games = []
    for game in games:
        game_tuple = game.find_all('strong')[-1].getText().split('.', 1)
        if game_tuple[0] == 'Half-Life 2':
            game_tuple = ['14', 'Half-Life 2']

        game_title = game_tuple[1].strip()
        game_title = game_title.replace('Street Fighter 2', 'Street Fighter II')

        extracted_games.append(tuple((game_tuple[0], game_title)))
    
    return extracted_games

def get_hiconsumption():
    base_url = "https://hiconsumption.com/best-video-games-of-all-time/"
    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find_all('strong', attrs={'class': None}, limit=50)
    
    extracted_games = []
    for game in games:
        game_tuple = game.getText().split('.', 1)
        extracted_games.append(tuple((game_tuple[0], game_tuple[1].strip())))
    
    return extracted_games

def get_theage():
    base_url = "https://www.theage.com.au/technology/the-50-best-games-20051006-gdm6uh.html"
    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find_all('p', attrs={'class': None})
    
    extracted_games = []
    for game in games:
        if game.find('strong'):
            game_tuple = game.find('strong').getText().split('.', 1)
            extracted_games.append(tuple((game_tuple[0], game_tuple[1].split('(', 1)[0].strip())))
    
    return extracted_games


def get_thetoptens():
    base_url = "https://www.thetoptens.com/video-games/"
    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find_all('b', attrs={'data-user': None}, limit=10)

    position = 1
    extracted_games = []
    for game in games:
        extracted_games.append(tuple((position, game.getText().strip())))
        position += 1

    return extracted_games


def save_csv_file(games, file_name):
    with open('../extracted_data/' + file_name + '.csv', 'w', encoding='utf8', newline='') as myfile:
        csv_out = csv.writer(myfile, quoting=csv.QUOTE_ALL)
        csv_out.writerow(['position', 'game_title'])

        for game in games:
            csv_out.writerow(game)


def get_edge():
    base_url = "https://nintendoeverything.com/edge-ranks-the-top-100-greatest-games-2017-edition/"
    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find_all('p')[8]
    games = games.getText().splitlines()

    extracted_games = []
    for game in games:
        if game == '62: Persona 4 Golden':
            game = game.replace(':', '.')

        game_tuple = game.split('.', 1)
        extracted_games.append(tuple((game_tuple[0], game_tuple[1].strip())))

    return extracted_games


def get_guinness():
    base_url = "https://www.eurogamer.net/articles/guinness-lists-top-50-games-of-all-time"
    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find('ol', attrs={'class': None}).find_all('li')

    position = 1
    extracted_games = []
    for game in games:
        game_title = game.getText().strip()

        game_title = fix_game_title(game_title)
        extracted_games.append(tuple((position, game_title)))
        position += 1
    
    return extracted_games

def get_ranker_by_users():
    base_url = "https://www.ranker.com/crowdranked-list/the-best-games-of-all-time"
    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find_all('h2', attrs={'class': None})
    
    position = 1
    extracted_games = []
    for game in games:
        game_title = game.find('a').getText().strip()

        game_title = fix_game_title(game_title)
        extracted_games.append(tuple((position, game_title)))
        position += 1
    
    return extracted_games

def get_the_wrap():
    base_url = 'https://www.thewrap.com/the-30-best-video-games-of-all-time-photos/'
    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find_all('strong', attrs={'class': None})
    
    extracted_games = []
    for game in games:
        data = game.getText().split('.', 1)

        game_title = data[1].split('(', 1)[0].replace('"', '').strip()

        game_title = fix_game_title(game_title)
        extracted_games.append(tuple((data[0], game_title)))
    
    return extracted_games

def revista_gq():
    base_url = 'https://www.revistagq.com/noticias/tecnologia/galerias/los-100-mejores-videojuegos-de-la-historia/8951?image=5ca5e9980a5ae617822a2138'
    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    games = soup.find_all('span', attrs={'class': 'gallery-slide-caption__hed-text'})

    extracted_games = []
    for game in games:
        data = game.getText().split('.', 1)
        game_title = data[1].split('(', 1)[0].replace('"', '').strip()

        game_title = fix_game_title(game_title)
        extracted_games.append(tuple((data[0], game_title)))

    return extracted_games

def goty_awards_tracker():
    base_url = 'https://www.gameawards.net/'

    page = requests.get(base_url)
    soup = BeautifulSoup(page.content, 'html.parser')

    divs = soup.find_all('div', attrs={'class': 'widget-content'})

    urls = []

    for div in divs:
        a = div.find('a')

        if a != None:
            href = div.find('a').get("href")
            if not 'rules' in href and not 'stats' in href and not 'twitter' in href:
                urls.append(href)

    extracted_games = []

    for url in urls:
        page = requests.get(url)
        soup = BeautifulSoup(page.content, 'html.parser')

        ul = soup.find('ul')
        lis = ul.find_all('li')

        for li in lis:
            if li.find('span') != None:
                text = li.find('span').getText()
                if not 'Media Outlets' in text:
                    game_title = ''
                    number_goty = ''

                    if "Middle-earth: Shadow of Mordor" in text or "Marvel's Spider-Man: Miles Morales" in text:
                        game_title = '-'.join(text.split('-', 2)[0:2]).strip()
                        number_goty = text.split('-', 2)[2].strip()
                    else:
                        game_title, number_goty = text.split('-', 1)

                    extracted_games.append(tuple((game_title.strip(), number_goty.split('(')[0].strip())))

    sorted_by_second = sorted(extracted_games, key = lambda x: int(x[1]), reverse=True)

    return sorted_by_second

def fix_game_title(game_title):
    game_title = game_title.replace('FTL', 'FTL: Faster Than Light')
    game_title = game_title.replace('The Witcher 3', 'The Witcher 3: Wild Hunt')
    game_title = game_title.replace('Zelda Ocarina of Time', 'The Legend of Zelda: Ocarina of Time')
    game_title = game_title.replace('Resident Evil IV', 'Resident Evil 4')
    game_title = game_title.replace('GoldenEye', 'GoldenEye 007')
    game_title = game_title.replace('Halo', 'Halo: Combat Evolved')
    game_title = game_title.replace('GTA San Andreas', 'Grand Theft Auto: San Andreas')
    game_title = game_title.replace('Zelda: A Link to the Past', 'The Legend of Zelda: A Link to the Past')
    game_title = game_title.replace('GTA Vice City', 'Grand Theft Auto: Vice City')
    game_title = game_title.replace('Elder Scrolls IV: Oblivion', 'The Elder Scrolls IV: Oblivion')
    game_title = game_title.replace('God of War', 'God of War (2005)')
    game_title = game_title.replace('Skyrim', 'The Elder Scrolls V: Skyrim')

    return game_title

if __name__ == '__main__':
    games = goty_awards_tracker()
    save_csv_file(games, 'goty_awards_tracker')


            