void main(){
	int num;
  printf("Enter number:\n");
  scanf("%d",&num);
  for(int i=2;i<=num/2;i++){
  	if((num%i)==0){
  		printf("Not Prime\n");
  		break;
  	}
  	else{
  		printf("Prime number\n");
  	}
  }
}
