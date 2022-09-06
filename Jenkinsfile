pipeline{ 
    agent any
    environment {
        registry = "pareshbarad1992/node-app"
        registryCredential = 'DockerHub'
        dockerImage = ''
    }
    stages {
        stage('Build'){
           steps{
              script{
                sh 'npm install'
              } 
           }   
        }
        stage('Building image') {
            steps{
                script {
                  dockerImage = docker.build registry + ":latest"
                 }
             }
          }
          stage('Push Image') {
              steps{
                  script {
                       docker.withRegistry( '', registryCredential){                            
                       dockerImage.push()
                      }
                   }
                } 
           }
           stage('Deploying into k8s'){
            steps{
                // sh 'kubectl apply -f https://raw.githubusercontent.com/paresh-barad/node-app/master/deployment.yaml' 
                sh "envsubst < ${WORKSPACE}/deployment.yaml | kubectl apply -f -"

            }
        }
    }
}
