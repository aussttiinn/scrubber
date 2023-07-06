class FbHandler:
    def __init__(self, accessToken):
        self.__accessToken = accessToken
    
    def getAccessToken(self):
        return self.__accessToken

    def getPosts(self):
        pass